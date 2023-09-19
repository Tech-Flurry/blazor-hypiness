using System.Text;

namespace BlazorHypiness.Utilities;
public class CssBuilder
{
	private readonly Stack<string> _cssClasses = new( );

	public CssBuilder( )
	{
	}

	public CssBuilder(string cssClass)
	{
		_cssClasses.Push(cssClass);
	}

	public CssBuilder Add(string cssClass)
	{
		if (_cssClasses.Any(x => x.Equals(cssClass, StringComparison.CurrentCultureIgnoreCase))) return this;
		_cssClasses.Push(cssClass);
		return this;
	}

	public void Remove(string cssClass)
	{
		var tempStack = new Stack<string>( );
		for (int i = 0; i < _cssClasses.Count; i++)
		{
			var popped = _cssClasses.Pop( );
			if (popped.Equals(cssClass, StringComparison.InvariantCultureIgnoreCase)) break;

			tempStack.Push(popped);
		}

		foreach (var item in tempStack)
			_cssClasses.Push(item);
	}

	public void Clear( ) => _cssClasses.Clear( );

	public string Build( )
	{
		var stringBuilder = new StringBuilder( );
		for (var i = 0; i < _cssClasses.Count; i++)
			stringBuilder.Append(_cssClasses.Pop( )).Append(' ');
		return stringBuilder.ToString( );
	}
}
