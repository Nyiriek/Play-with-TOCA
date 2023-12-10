from django.shortcuts import render
# from forms import MyModelForm
# Create your views here.
def sign_up(request):
    if request.method == 'POST':
        form = MyModelForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('website-home')
    else:
        form = MyModelForm()
    return render(request, 'user/register.html', {'form': form})
